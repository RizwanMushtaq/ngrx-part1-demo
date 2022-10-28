import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: '7hit00h9uzpq',
  accessToken: 'ebAFzD7-5kFL51jWFOx7IjI_Vcq2GWDnxzKQ_4nlizg',

  contentTypeIds: {
    blogPost: 'blogPost',
  },
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  constructor() {}

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.blogPost,
          },
          query
        )
      )
      .then((res) => res.items);
  }
}
