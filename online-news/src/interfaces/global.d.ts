interface news {
  abstract: string;
  multimedia?: { url: string }[];
  published_date?: string;
  title: string;
  url: string;
  web_url: string;
  section?: string | undefined;
  byline?: string;
}
