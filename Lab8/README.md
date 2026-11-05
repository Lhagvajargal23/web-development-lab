# Лаб 8. Bootstrap ба Tailwind CSS

Лаб 6-ийн фото цомгийн хуудсыг Bootstrap болон Tailwind-ээр хоёр удаа хийж харьцуулав.

- Bootstrap хуудас: `bootstrap/index.html`
- Tailwind хуудас: `tailwind/index.html`

## Харьцуулалт

| | Bootstrap | Tailwind |
|---|---|---|
| CSS хэмжээ (шахсан) | 33.9 kB | 2.8 kB |
| JavaScript хэмжээ | 25.2 kB | 0 kB |
| Нэг card-ын class тоо | 7 | 16 |
| Lighthouse Performance | 74 | 65 |
| Lighthouse Accessibility | 93 | 90 |
| Lighthouse Best Practices | 100 | 100 |
| Lighthouse SEO | 91 | 91 |

## Дүгнэлт

Bootstrap нь бэлэн компонент ашигладаг тул нэг card-д 7 класс хангалттай байсан ч CSS болон JavaScript-ийн хэмжээ том (нийт 59 kB). Tailwind-д нэг card 16 класстай тул HTML урт болсон ч CSS нь зөвхөн ашигласан классуудыг агуулдаг тул 2.8 kB л байсан. Lighthouse-ийн Performance оноо Bootstrap-д 74, Tailwind-д 65 гарсан нь зургууд том (нийт 26 MB орчим) байсантай холбоотой тул CSS-ийн чанарыг илтгэхгүй. Бусад оноо хоёр аргад бараг ижил байсан. Хурдан хуудас хийхэд Bootstrap илүү амар, харин өөрийн загвар, өнгө тохируулахад Tailwind илүү уян хатан байлаа.