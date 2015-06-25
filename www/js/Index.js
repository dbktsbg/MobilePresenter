
jQuery
(
    function ()
    {

        var app =
        {
            initialize: function () {
                alert("app.initialize()");
                this.bindEvents();
            },

            bindEvents: function () {
                document.addEventListener('deviceready', this.onDeviceReady, false);
            },

            onDeviceReady: function () {
                app.receivedEvent('deviceready');
            },

            receivedEvent: function (id) {
                var parentElement = document.getElementById(id);
                var listeningElement = parentElement.querySelector('.listening');
                var receivedElement = parentElement.querySelector('.received');

                listeningElement.setAttribute('style', 'display:none;');
                receivedElement.setAttribute('style', 'display:block;');

                console.log('Received Event: ' + id);
            }

        }

        MobilePresenterViewModel = 
            function ()
            {

                // ========== Enumerations ==========

                // ========== Properties ==========
                var self = this;

                // ========== Event Handlers =========

                // ========== Methods =========

                // ---------- App ----------

                self.initializeViewModel =
                    function () {
                        try {
                            initializeAppState();
                            initializeUI();
                        }
                        catch (e) {
                            error(e.message);
                        }
                    }

                initializeAppState =
                    function () {
                        try {
                        }
                        catch (e) {
                            error(e.message);
                        }
                    }

                initializeUI =
                    function () {
                        try {
                            //jQuery("#SlideViewerParentContainter")
                            //    .swipe
                            //    (
                            //        {
                            //            swipe: swipeHandler(event, direction, distance, duration, fingerCount, fingerData),
                            //            threshold: 0
                            //        }
                            //    );
                        }
                        catch (e) {
                            error(e.message);
                        }
                    }

                error =
                    function (message)
                    {
                        alert(message);
                    }

                // ---------- Slide Navigation ----------

                //swipeHandler = 
                //    function (event, direction, distance, duration, fingerCount, fingerData) 
                //    {
                //        alert("swipeHandler()");
                //        switch (direction)
                //        {
                //            case "left":
                //                OnNextSlide();
                //                break;
                //            case "right":
                //                OnPreviousSlide();
                //                break;
                //            default:
                //                alert("unhandled swipe direction:" + direction);
                //                break;
                //        }
                //    }

                OnNextSlide =
                        function () {
                            alert("OnNextSlide");
                        }

                OnPreviousSlide =
                    function () {
                        alert("OnNextSlide");
                    }

            }

        // ========== Main =========
        var myMobilePresenterViewModel = new MobilePresenterViewModel();
        myMobilePresenterViewModel.initializeViewModel();

        app.initialize();

        alert("End of Main");
    }
);