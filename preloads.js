
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.DMy9iVwD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.eeJKwMD1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-OnePage.DPv_ZPco.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.CvdYCfCO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation.B1cC6Z-y.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.ICzGVa7s.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.Br7OrPeg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RememberMeDescriptionText.C-zLbVSU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.C3wgMnIO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.DMPHPrH3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSubscribeMessenger.9e0j9VkX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.CtqHxpP0.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.Cb38QAdM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DmqjTkNB.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0687/3710/6215/files/werg3_x320.png?v=1669819260"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  