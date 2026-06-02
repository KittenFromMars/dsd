(function() {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LegalDocument",
      "name": "HCMA 619/2005 Judgment Record",
      "identifier": "HCMA 619/2005",
      "description": "High Court of Hong Kong Court of First Instance Magistracy Appeal record involving Yiu Yau Ho Daniel 姚佑灝 who works contract project manager CPM/BIM at Drainage Services Department (DSD).",
      "publisher": {
        "@type": "Organization",
        "name": "Hong Kong Judiciary Legal Reference System"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
})();