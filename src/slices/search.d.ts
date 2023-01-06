export type Book = {
  author: string; // 작가
  description: string; // 책 요약
  discount: string; // ?
  image: string; //책 썸네일 이미지 url
  isbn: string; //isbn
  link: string; //책 구매 링크 (네이버)
  pubdate: string; //출판날짜
  publisher: string; //출판사
  title: string; //책 이름
};

export type SearchInfo = {
  display: number;
  items: Book[];
  lastBuildDate: string;
  start: number;
  total: number;
};
