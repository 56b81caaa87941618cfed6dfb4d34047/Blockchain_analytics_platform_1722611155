/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1722611761", {
    template: `
    <section id="bottom-bar-component" class="fixed bottom-0 z-30 w-full lg:w-1/2 bg-opacity-30 backdrop-blur-lg backdrop-filter bg-gradient-to-r from-pink-400 via-purple-500 to-black rounded-t-2xl shadow-lg">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-6 py-4">
            <div id="action-buttons" class="flex space-x-6 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 text-white bg-opacity-20 backdrop-blur-md backdrop-filter bg-pink-500 rounded-xl hover:bg-opacity-30 transition duration-300 ease-in-out shadow-md" href="contact.html">Contact</a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 text-white bg-opacity-20 backdrop-blur-md backdrop-filter bg-purple-600 rounded-xl hover:bg-opacity-30 transition duration-300 ease-in-out shadow-md animate-pulse">Pay</a>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null
        }
    },
});
