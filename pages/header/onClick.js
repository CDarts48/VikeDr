export const handleContactClick = () => {
    // Track the link click event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'contact_link_click',
        category: 'Navigation',
        action: 'Click',
        label: 'Contact'
      });
    }
  };