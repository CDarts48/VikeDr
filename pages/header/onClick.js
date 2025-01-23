export const gtag_report_conversion = (url) => {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11312378702/IOYMCO-K4pEaEM7mlJIq',
      'event_callback': callback
    });
    return false;
  };
  
  export const handleContactClick = (event) => {
    event.preventDefault(); // Prevent the default action
    gtag_report_conversion('mailto:Chris@tophersmandr.com?subject=A Maintenance and Repair Request from');
  };