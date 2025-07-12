export const API_URL = {
    HOME: {
        SUCCESS_VIDEOS: '/api/video/',
        REVIEWS: '/api/student-review/',
    },
    SERVICES: {
        GET_SERVICE_HEADING: '/api/service-header/',
        GET_SERVICE_DETAILS: '/api/service-body/',
    },
    BLOGS: {
        POST_BLOG_CATEGORIES: '/api/blog-category',
        GET_BLOG_CATEGORIES: '/api/blog-category',
        PATCH_BLOG_CATEGORY: (id: string) => `/api/blog-category/${id}`,
    },
    CONTACT_US: {
        GET_CONTACT_US: '/api/contact/',
        POST_CONTACT_US: '/api/contact/',
    },
    SEO: {
        GET_HOME_SEO: '/api/MetaTagsHome/',
        GET_BLOG_SEO: '/api/blogmeta/',
        GET_CONTACT_SEO: '/api/contactmeta/',
        GET_STUDY_ABROAD_SEO: '/api/countrymeta/',
        GET_SERVICE_SEO: '/api/servicemeta/',
    },
    STUDY_ABROAD: {
        GET_COUNTRY: '/api/countries/',
        GET_UNIVERSITY: '/api/university/',
        GET_WHYCHOOSE: '/api/why-choose/'
    }
}