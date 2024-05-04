Vue.component('Kitchen', {
    template: `
      <div>
            <p class="article__title subtitle">Let’s Get Solution for Building Construction Work</p>
            <div class="article__img-box">
                <img class="article__img" src="./images/kitchen_1.jpg" alt="kitchen">
            </div>
            <div class="article__date-box">
                <p class="article__date">26 December,2022</p>
                <p class="article__img-desc">Interior / Home / Decore</p>
            </div>
                <p class="article__text description">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                 Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>


            <p class="article__title subtitle">Design sprints are great</p>   
            <p class="article__text description">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to   popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
             
            <div class="article__ul-element">
                <div class="article__ol-element">
                    <p class="article__ol-number">1.</p>
                    <p class="article__ol-text description">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    
                </div>
                <div class="article__ol-element">
                    <p class="article__ol-number">2.</p>
                    <p class="article__ol-text description">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>

                </div>
                <div class="article__ol-element">
                    <p class="article__ol-number">3.</p>
                    <p class="article__ol-text description">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>

                </div>

                <div class="article__img-box">
                    <img class="article__img" src="./images/kitchen_2.jpg" alt="kitchen">
                </div>

                <p class="article__text description">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                
            </div>
        
            
        </div>
    `,
    data() {
        return {

        };
    },

});

Vue.component('Bedroom', {
    template: `
        <div>
            <p class="article__title subtitle">Bedroom articles</p>
            <p class="article__title description">New article's template</p>
        </div>
    `

})

Vue.component('Building', {
    template: `
        <div>
            <p class="article__title subtitle">Building articles</p>
            <p class="article__title description">New article's template</p>
        </div>
    `

})

Vue.component('Architecture', {
    template: `
        <div>
            <p class="article__title subtitle">Architecture articles</p>
            <p class="article__title description">New article's template</p>
        </div>
    `

})

Vue.component('Kitchen-Planning', {
    template: `
        <div>
            <p class="article__title subtitle">Kitchen-Planning articles</p>
            <p class="article__title description">New article's template</p>
        </div>
    `

})

Vue.component('Bathroom', {
    template: `
        <div>
            <p class="article__title subtitle">Bathroom articles</p>
            <p class="article__title description">New article's template</p>
        </div>
    `

})

new Vue({
    el: "#details",

    data: {
        nameButtons: [
            "Kitchen",
            "Bedroom",
            "Building",
            "Architecture",
            "Kitchen-Planning",
            "Bathroom",
        ],
        currentTab: "Kitchen",
    },
    computed: {
        changeTabs() {


            return `${this.currentTab}`;
        },

    },
});