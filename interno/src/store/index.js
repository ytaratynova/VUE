import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        articlesData: {
            array: [
                {
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Kitchan Design',
                    date: '26 December,2022',
                    fileName: 'blog_1.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    title: 'Low Cost Latest Invented Interior Designing Ideas. Work',
                    category: 'Living Design',
                    date: '22 December,2022',
                    fileName: 'blog_2.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Interior Design',
                    date: '25 December,2022',
                    fileName: 'blog_3.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Kitchan Design',
                    date: '26 December,2022',
                    fileName: 'blog_4.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    title: 'Low Cost Latest Invented Interior Designing Ideas. Work',
                    category: 'Living Design',
                    date: '22 December,2022',
                    fileName: 'blog_5.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Interior Design',
                    date: '25 December,2022',
                    fileName: 'blog_6.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Kitchan Design',
                    date: '26 December,2022',
                    fileName: 'blog_6.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    title: 'Low Cost Latest Invented Interior Designing Ideas. Work',
                    category: 'Living Design',
                    date: '22 December,2022',
                    fileName: 'blog_5.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Interior Design',
                    date: '25 December,2022',
                    fileName: 'blog_4.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    category: 'Interior Design',
                    date: '26 December,2022',
                    fileName: 'latest_post.png',
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. \n Lorem Ipsum is not simply random text. It has roots in a piece of  classica.`
                },

            ],
            tabs: [
                { name: 'Kitchan' },
                { name: 'Bedroom' },
                { name: 'Bui;ding' },
                { name: 'Architecture' },
                { name: 'Kitchen Planning' },
                { name: 'Bathroom' },
            ]
        },
        projectsData: {

            array: [
                {
                    id: 1,
                    category: 'Modern Kitchan',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_1.jpg',
                },
                {
                    id: 2,
                    category: 'Modern Kitchan',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_2.jpg'
                },
                {
                    id: 3,
                    category: 'Modern Kitchan',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_3.jpg'
                },
                {
                    id: 4,
                    category: 'Modern Bathroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_4.jpg'
                },
                {
                    id: 5,
                    category: 'Minimal Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_5.jpg'
                },
                {
                    id: 6,
                    category: 'Minimal Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_6.jpg',
                    title: 'Minimal Look Bedrooms',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n 
                    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                },

                {
                    id: 7,
                    category: 'Classic Minimal Bathroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_7.jpg',
                    title: 'Minimal Look Bathroom',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                },
                {
                    id: 8,
                    category: 'Modern Living room',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_8.jpg'
                },
                {
                    id: 9,
                    category: 'System Table',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_9.jpg'
                },
                {
                    id: 10,
                    category: 'Modern Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_10.jpg'
                },
                {
                    id: 11,
                    category: 'Modern Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_11.jpg'
                },
                {
                    id: 12,
                    category: 'Modern Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_12.jpg'
                }
            ],
            tabs: [
                { name: 'Kitchan' },
                { name: 'Bedroom' },
                { name: 'Bathroom' },
                { name: 'Living' },
            ],
        }
    },
    mutations: {

    },
    getters: {
        getCategoryProjects: (state) => (value) => {
            const categoryProjects = [];
            state.projectsData.array.forEach(item => {
                if (item.category.includes(value)) {
                    categoryProjects.push(item);
                }
            });
            categoryProjects.forEach(project => {
                project['isActive'] = false;
            });
            categoryProjects[0].isActive = true;
            return categoryProjects;

        },
        getProjectsPreview: (state) => state.projectsData.array.slice(0, 4),

        getProjectsList: (state) => state.projectsData.array,

        getProjectTagsList: (state) => state.projectsData.tabs,

        getProjectById: (state) => (index) => {
            return state.projectsData.array[index - 1]
        },


        getProjectsTotalPages: (state) => Math.ceil(state.projectsData.array.length / 6),

        paginatedProjects: (state) => (currentPage) => {
            const startIndex = (currentPage - 1) * 8;
            const endIndex = startIndex + 8;
            return state.projectsData.array.slice(startIndex, endIndex);
        },


        getArticlesPreview: (state) => state.articlesData.array.slice(0, 3),

        getArticleLast: (state) => state.articlesData.array.slice(-1)[0],

        getArticlsTotalPages: (state) => Math.ceil(state.articlesData.array.length / 6),

        paginatedArticls: (state) => (currentPage) => {
            const startIndex = (currentPage - 1) * 6;
            const endIndex = startIndex + 6;
            return state.articlesData.array.slice(startIndex, endIndex);
        },
        getTagsList: (state) => state.articlesData.tabs,

        getArticlsByTag: (state) => (tagName) => {
            const articlsTag = []
            state.articlesData.tabs.forEach(item => {
                if (item.name.includes(tagName)) {
                    articlsTag.push(item);
                }

            })
            articlsTag.forEach(project => {
                project['isActive'] = false;
            });
            articlsTag[0].isActive = true;
            return articlsTag;
        },


    }

});