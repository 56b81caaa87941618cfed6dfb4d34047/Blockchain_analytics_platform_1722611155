/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722611159", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 via-purple-600 to-black bg-opacity-50 backdrop-blur-lg rounded-lg backdrop-filter">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-20 md:p-12 lg:p-16">
                <hr id="footer-divider" class="my-8 border-purple-300 sm:mx-auto lg:my-10">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white hover:text-pink-300 transition duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10" alt="Landwind Logo" />
                            BlockMetrics - Blockchain Analytics Suite
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-purple-100 hover:text-white transition duration-300">
                        Stay ahead of the curve with BlockMetrics. Our powerful analytics engine processes and analyzes new blockchain data in real-time, giving you valuable insights to drive your decisions. Built for developers, trusted by enterprises.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
