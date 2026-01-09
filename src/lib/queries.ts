// Приходять тільки опубліковані відгуки
export const allReviewsQuery = `
  *[_type == "review" && status == "published"] | order(order asc, _createdAt desc) {
    "id": _id,
    "authorName": authorName[$lang],
    "description": description[$lang],
    "projectLink": projectLink,
    "contentType": contentType,
    "videoUrl": videoUrl,
    "reviewText": reviewText[$lang],
    "rating": rating,
    "order": order,
    "createdAt": _createdAt,
    "status": status,
    "reviewImage": reviewImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot,
      alt
    }
  }
`;

export const allProjectsQuery = `
  *[_type == "project"] | order(order asc, _createdAt desc) {
    "id": _id,
    "name": name[$lang],
    "clientName": clientName[$lang],
    "shortDescription": shortDescription[$lang],
    "slug": slug.current,
    "previewImage": previewImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    "mainImage": mainImageDesktop{
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    "backgroundColor": backgroundColor.hex,
    "textColor": textColor,
    "buttonColor": buttonColor,
    "categories": categories[]->{
      "id": _id,
      "name": name[$lang]
    },
   "type": type->{
     "id": _id,
     "name": name[$lang],
     "icon": icon{
      asset->{
      _id,
      url
    }
  }
},
    "blocks": blocks[]{
      _type == "textBlock" => {
        "type": _type,
        "firstParagraph": firstParagraph[$lang],
        "secondParagraph": secondParagraph[$lang]
      },
      _type == "imageBlock" => {
        "type": _type,
        "mobileImage": mobileImage{
          asset->{
            _id,
            url
          },
          crop,
          hotspot
        },
        "desktopImage": desktopImage{
          asset->{
            _id,
            url
          },
          crop,
          hotspot
        },
        "alt": alt[$lang]
      },
      _type == "reviewBlock" => {
        "type": _type,
        "review": {
          "id": review._id,
          "authorName": review.authorName[$lang],
          "description": review.description[$lang],
          "projectLink": review.projectLink,
          "contentType": review.contentType,
          "videoUrl": review.videoUrl,
          "reviewText": review.reviewText[$lang],
          "rating": review.rating
        }
      }
    },
    "websiteUrl": websiteUrl,
    "advantages": advantages[$lang],
    "portfolioTitle": portfolioTitle[$lang],
    "portfolioDescription": portfolioDescription[$lang],
    "order": order,
    "createdAt": _createdAt
  }
`;

export const allBlogsQuery = `
  *[_type == "blog"] | order(order asc, _createdAt desc) {
    "id": _id,
    "name": name[$lang],
    "description": description[$lang],
    "slug": slug.current,
    "previewImage": {
      "url": previewImage.asset->url,
      "alt": previewImage.asset->altText
    },
    "mainImageMobile": {
      "url": mainImageMobile.asset->url,
      "alt": mainImageMobile.asset->altText
    },
    "mainImageDesktop": {
      "url": mainImageDesktop.asset->url,
      "alt": mainImageDesktop.asset->altText
    },
    "content": content[$lang],
    "seo": {
      "title": seoTitle[$lang],
      "subtitle": seoSubtitle[$lang],
      "keywords": seoKeywords[$lang]
    },
    "schemaOrg": schemaOrg.asset->url,
    "order": order,
    "createdAt": _createdAt
  }
`;

export const singlePostQuery = `
  *[_type == "blog" && slug.current == $slug][0] {
    "id": _id,
    "name": name[$lang],
    "description": description[$lang],
    "slug": slug.current,
    "previewImage": {
      "url": previewImage.asset->url,
      "alt": previewImage.asset->altText
    },
    "mainImageMobile": {
      "url": mainImageMobile.asset->url,
      "alt": mainImageMobile.asset->altText
    },
    "mainImageDesktop": {
      "url": mainImageDesktop.asset->url,
      "alt": mainImageDesktop.asset->altText
    },
    "content": content[$lang],
    "seo": {
      "title": seoTitle[$lang],
      "subtitle": seoSubtitle[$lang],
      "keywords": seoKeywords[$lang]
    },
    "schemaOrg": schemaOrg.asset->url,
    "order": order,
    "createdAt": _createdAt
  }
`;

export const limitedBlogsQuery = `
  *[_type == "blog"] | order(order asc, _createdAt desc)[0...$limit] {
    "id": _id,
    "name": name[$lang],
    "description": description[$lang],
    "slug": slug.current,
    "previewImage": {
      "url": previewImage.asset->url,
      "alt": previewImage.asset->altText
    },
    "mainImageMobile": {
      "url": mainImageMobile.asset->url,
      "alt": mainImageMobile.asset->altText
    },
    "mainImageDesktop": {
      "url": mainImageDesktop.asset->url,
      "alt": mainImageDesktop.asset->altText
    },
    "content": content[$lang],
    "seo": {
      "title": seoTitle[$lang],
      "subtitle": seoSubtitle[$lang],
      "keywords": seoKeywords[$lang]
    },
    "schemaOrg": schemaOrg.asset->url,
    "order": order,
    "createdAt": _createdAt
  }
`;