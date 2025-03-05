import { createRaProvider } from "@rck.princy/ra-data-provider-wrapper";
import { dummyProvider } from "./dummy-provider";
import { userProvider } from "./user-provider";

export const dataProvider = createRaProvider(
  [dummyProvider, userProvider],
  {
    getListOptions: {
      defaultPagination: {
        page: 1,
        perPage: 10,
      },
      getPageInfo: async ({
        currentProvider,
        getListParams: { pagination, filter, meta },
      }) => {
        const nextPage = await currentProvider.getList!({
          meta,
          filter,
          pagination: {
            perPage: pagination.perPage,
            page: pagination.page + 1,
          },
        });

        return {
          pageInfo: {
            hasNextPage: nextPage.length > 0,
            hasPreviousPage: (pagination?.page ?? 1) > 1,
          },
        };
      },
    },
  }
);
