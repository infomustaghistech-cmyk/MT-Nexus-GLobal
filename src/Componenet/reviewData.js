export function reviewUrl(value) {
  if (typeof value !== 'string') return '';
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

export function publicReviews(rows) {
  return (Array.isArray(rows) ? rows : []).filter((row) => row.is_approved === true).map((row) => {
    const message = typeof row.message === 'string' ? row.message.trim() : '';
    return {
      id: row.id,
      name: typeof row.clientName === 'string' && row.clientName.trim() ? row.clientName.trim() : 'Client review',
      role: typeof row.designation === 'string' ? row.designation.trim() : '',
      quote: /^screenshot review$/i.test(message) ? '' : message,
      image: reviewUrl(row.clientImg),
      source: reviewUrl(row.video_url),
    };
  }).filter((review) => review.image || review.quote);
}
