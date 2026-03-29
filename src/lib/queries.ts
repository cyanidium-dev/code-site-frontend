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
    "advantages": advantages[$lang],
    "portfolioTitle": portfolioTitle[$lang],
    "portfolioDescription": portfolioDescription[$lang]
  }
`;

export const singleProjectQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    "id": _id,
    "name": name[$lang],
    "clientName": clientName[$lang],
    "shortDescription": shortDescription[$lang],
    "description": shortDescription[$lang],
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
    "mainImageDesktop": {
      "url": mainImageDesktop.asset->url
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
        "review": review->{
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
      }
    },
    "websiteUrl": websiteUrl,
    "advantages": advantages[$lang],
    "portfolioTitle": portfolioTitle[$lang],
    "portfolioDescription": portfolioDescription[$lang],
    "seo": {
      "title": seoTitle[$lang],
      "subtitle": seoSubtitle[$lang],
      "keywords": seoKeywords[$lang]
    },
    "schemaOrg": schemaOrg.asset->url,
    "order": order,
    "createdAt": _createdAt,
    "updatedAt": _updatedAt
  }
`;

/**
 * Локали blogPost — как в docs/sanity-frontend-guide.md и `blogPostLocaleContent`.
 *
 * ВАЖНО (GROQ): проекция вида `"ru": { title, excerpt }` читает поля с **корня** документа,
 * а не из вложенного `ru`. Нужно явно: `"ru": ru { title, excerpt }`.
 *
 * Для списка статей не запрашиваем `body` — карточкам достаточно title/excerpt; меньше payload.
 */
const blogPostListLocaleProjection = `
  title,
  excerpt,
  seo {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription
  }
`;

export const allBlogsQuery = `
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
    "id": _id,
    "slug": slug.current,
    "previewImage": {
      "url": coverImage.asset->url,
      "alt": coalesce(coverImage.alt, coverImage.asset->altText, "")
    },
    "publishedAt": publishedAt,
    "ru": ru { ${blogPostListLocaleProjection} },
    "uk": uk { ${blogPostListLocaleProjection} },
    "en": en { ${blogPostListLocaleProjection} }
  }
`;

/**
 * Один пост: полные объекты локалей как в Sanity (без сужающей проекции полей).
 * Разворачиваем только coverImage.asset → url (иначе только _ref, Next/Image не отрисует).
 */
export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    _type,
    _updatedAt,
    slug,
    coverImage {
      ...,
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    publishedAt,
    author,
    ru,
    uk,
    en
  }
`;

/** @deprecated Use blogPostBySlugQuery — kept for legacy imports during migration */
export const singlePostQuery = blogPostBySlugQuery;

export const limitedBlogsQuery = `
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc)[0...$limit] {
    "id": _id,
    "slug": slug.current,
    "previewImage": {
      "url": coverImage.asset->url,
      "alt": coalesce(coverImage.alt, coverImage.asset->altText, "")
    },
    "publishedAt": publishedAt,
    "ru": ru { ${blogPostListLocaleProjection} },
    "uk": uk { ${blogPostListLocaleProjection} },
    "en": en { ${blogPostListLocaleProjection} }
  }
`;
