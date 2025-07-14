import api from "../axios";
import { API_URL } from "../api_url";
import { CountryData, WhyChooseCard } from "@/app/sections/StudyAbroad/countryData";

interface ApiCountry {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    alt_img_text: string;
    alt_img_title: string;
    alt_img_caption: string;
    alt_img_description: string;
    slug: string;
    icon: string;
    heading: string;
}

interface ApiUniversity {
    id: number;
    title: string;
    logo: string;
    country: number;
}

interface ApiWhyChoose {
    id: number;
    title: string;
    description: string;
    icon: string;
    country: number;
}

export const getStudyAbroadData = async (): Promise<Record<string, CountryData>> => {
    try {
        const [countriesRes, universitiesRes, whyChooseRes] = await Promise.all([
            api.get(API_URL.STUDY_ABROAD.GET_COUNTRY),
            api.get(API_URL.STUDY_ABROAD.GET_UNIVERSITY),
            api.get(API_URL.STUDY_ABROAD.GET_WHYCHOOSE)
        ]);

        const countries: ApiCountry[] = countriesRes.data;
        const universities: ApiUniversity[] = universitiesRes.data;
        const whyChooses: ApiWhyChoose[] = whyChooseRes.data;

        console.log("coun",countries,"uni",universities,"why",whyChooses);
        

        const universitiesByCountry = new Map<number, { logo: string, height: string, title: string }[]>();
        universities.forEach(uni => {
            if (!universitiesByCountry.has(uni.country)) {
                universitiesByCountry.set(uni.country, []);
            }
            universitiesByCountry.get(uni.country)?.push({ logo: uni.logo, height: '', title: uni.title });
        });

        const whyChoosesByCountry = new Map<number, WhyChooseCard[]>();
        whyChooses.forEach(wc => {
            if (!whyChoosesByCountry.has(wc.country)) {
                whyChoosesByCountry.set(wc.country, []);
            }
            whyChoosesByCountry.get(wc.country)?.push({ title: wc.title, description: wc.description });
        });

        const countryData: Record<string, CountryData> = {};

        countries.forEach(country => {
            const countryName = country.slug.toLowerCase();
            countryData[countryName] = {
                name: country.subtitle,
                paragraph: country.title,
                heading: country.heading,
                backgroundImage: country.image,
                greenSectionContent: country.description.split('+').map(s => s.trim()),
                animalShadow: country.icon,
                universityLogos: universitiesByCountry.get(country.id) || [],
                whyChooseCards: whyChoosesByCountry.get(country.id) || [],
                blueAnimal: whyChooses[0].icon,
            };
        });

        console.log(countryData);
        
        return countryData;

    } catch (error) {
        console.error("Error fetching study abroad data:", error);
        return {};
    }
}; 