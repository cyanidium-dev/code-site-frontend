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
    "status": status
  }
`;
