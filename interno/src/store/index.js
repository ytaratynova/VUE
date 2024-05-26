import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        articlesData: {
            array: [
                {
                    id: 1,
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Kitchan Design',
                    subCategory: 'Interior / Home / Decore',
                    date: '26 December,2022',
                    fileName: 'blog_1.jpg',
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                },
                {
                    id: 2,
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    category: 'Living Design',
                    subCategory: 'Interior / Home / Decore',
                    date: '22 December,2022',
                    fileName: 'blog_2.jpg',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`
                },
                {
                    id: 3,
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Interior Design',
                    subCategory: 'Decor / Artchitecture',
                    date: '25 December,2022',
                    fileName: 'blog_3.jpg',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`
                },
                {
                    id: 4,
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Kitchan Design',
                    subCategory: 'Decor / Artchitecture',
                    date: '26 December,2022',
                    fileName: 'blog_4.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 5,
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    category: 'Living Design',
                    subCategory: 'Decor / Artchitecture',
                    date: '22 December,2022',
                    fileName: 'blog_5.jpg',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`
                },
                {
                    id: 6,
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Kitchan Design',
                    subCategory: 'Interior / Home / Decore',
                    date: '25 December,2022',
                    fileName: 'blog_6.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 7,
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Living Design',
                    subCategory: 'Interior / Home / Decore',
                    date: '26 December,2022',
                    fileName: 'project_2.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 8,
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    category: 'Interior Design',
                    subCategory: 'Decor / Artchitecture',
                    date: '22 December,2022',
                    fileName: 'project_3.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 9,
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Interior Design',
                    subCategory: 'Decor / Artchitecture',
                    date: '25 December,2022',
                    fileName: 'project_4.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 10,
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Bedroom',
                    subCategory: 'Interior / Home / Decore',
                    date: '25 December,2022',
                    fileName: 'project_8.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 11,
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Bedroom',
                    subCategory: 'Interior / Home / Decore',
                    date: '25 December,2022',
                    fileName: 'project_9.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 12,
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Bedroom',
                    subCategory: 'Interior / Home / Decore',
                    date: '25 December,2022',
                    fileName: 'project_10.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 13,
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Bedroom',
                    subCategory: 'Interior / Home / Decore',
                    date: '25 December,2022',
                    fileName: 'project_12.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 14,
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Bathroom',
                    subCategory: 'Interior / Home / Decore',
                    date: '25 December,2022',
                    fileName: 'blog_14.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
                },
                {
                    id: 15,
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    category: 'Kitchan Design',
                    subCategory: 'Decor / Artchitecture',
                    date: '26 December,2022',
                    fileName: 'latest_post.png',
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. \n Lorem Ipsum is not simply random text. It has roots in a piece of  classica.`
                },

            ],
            tabs: [
                { name: 'Kitchan Design' },
                { name: 'Bedroom' },
                { name: 'Interior Design' },
                { name: 'Living Design' },
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
                    title: 'Minimal Look Kitchan',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_1.jpg', 'project_2.jpg', 'project_3.jpg'],
                },
                {
                    id: 2,
                    category: 'Modern Kitchan',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_2.jpg',
                    title: 'Kitchan of your dream',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_2.jpg', 'project_6.jpg', 'project_7.jpg'],
                },
                {
                    id: 3,
                    category: 'Modern Kitchan',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_3.jpg',
                    title: 'Modern Look Kitchan',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_3.jpg', 'project_7.jpg', 'project_8.jpg'],
                },
                {
                    id: 4,
                    category: 'Modern Bathroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_4.jpg',
                    title: 'Minimal Look Bathroom',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_4.jpg', 'project_2.jpg', 'project_5.jpg'],
                },
                {
                    id: 5,
                    category: 'Minimal Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_5.jpg',
                    title: 'Minimal Look Bedroom',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_5.jpg', 'project_2.jpg', 'project_3.jpg'],
                },
                {
                    id: 6,
                    category: 'Minimal Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_6.jpg',
                    title: 'Minimal Look Bedrooms',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n 
                    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_6.jpg', 'project_9.jpg', 'project_10.jpg'],
                },

                {
                    id: 7,
                    category: 'Classic Minimal Bathroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_7.jpg',
                    title: 'Minimal Look Bathroom',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_7.jpg', 'project_1.jpg', 'project_2.jpg'],
                },
                {
                    id: 8,
                    category: 'Modern Living room',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_8.jpg',
                    title: 'Modern Living room',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_8.jpg', 'project_10.jpg', 'project_12.jpg'],
                },
                {
                    id: 9,
                    category: 'System Table',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_9.jpg',
                    title: 'Modern Tables',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_9.jpg', 'project_2.jpg', 'project_3.jpg'],
                },
                {
                    id: 10,
                    category: 'Modern Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_10.jpg',
                    title: 'Bedroom of your dream',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_10.jpg', 'project_7.jpg', 'project_6.jpg', 'project_12.jpg'],
                },
                {
                    id: 11,
                    category: 'Modern Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_11.jpg',
                    title: 'Cozy Bedroom',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_11.jpg', 'project_8.jpg'],
                },
                {
                    id: 12,
                    category: 'Modern Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: 'project_12.jpg',
                    title: 'Blue and white Bedroom',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    pics: ['project_12.jpg', 'project_7.jpg', 'project_6.jpg', 'project_4.jpg'],
                }
            ],
            tabs: [
                { name: 'Kitchan' },
                { name: 'Bedroom' },
                { name: 'Bathroom' },
                { name: 'Living room' },
            ],
        }
    },
    mutations: {

    },
    getters: {

        getProjectsPreview: (state) => state.projectsData.array.slice(0, 4),

        getProjectTagsList: (state) => state.projectsData.tabs,

        getProjectById: (state) => (index) => {
            return state.projectsData.array[index - 1]
        },

        getProjectsTotalPages: (state) => (category) => {
            if (category === null) {
                return Math.ceil(state.projectsData.array.length / 6)
            } else {
                return Math.ceil(state.projectsData.array.filter((project) => project.category.includes(category)).length / 6)
            }

        },

        paginatedProjects: (state) => (currentPage, category) => {
            const startIndex = (currentPage - 1) * 8;
            const endIndex = startIndex + 8;
            if (category === null) {
                return state.projectsData.array.slice(startIndex, endIndex);
            } else {
                return state.projectsData.array.filter((project) => project.category.includes(category)).slice(startIndex, endIndex)
            }
        },


        getArticlesPreview: (state) => state.articlesData.array.slice(0, 3),

        getArticleLast: (state) => state.articlesData.array.slice(-1)[0],

        getArticlesList: (state) => state.articlesData.array,

        getArticleById: (state) => (index) => {
            return state.articlesData.array[index - 1]
        },

        getArticlsTotalPages: (state) => Math.ceil(state.articlesData.array.length / 6),


        paginatedArticls: (state) => (currentPage) => {
            const startIndex = (currentPage - 1) * 6
            const endIndex = startIndex + 6
            return state.articlesData.array.slice(startIndex, endIndex);
        },
        getTagsList: (state) => state.articlesData.tabs,

        getArticlsByTag: (state) => (tag) => {
            return state.articlesData.array.filter((item) => item.category === tag)
        },


    }

});