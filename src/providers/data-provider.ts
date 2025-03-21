import { createRaProvider } from "@rck.princy/ra-data-provider-wrapper";
import { userProvider } from "./user-provider";
import { eventProvider } from "./event-provider";
import { ticketProvider } from "./ticket-provider";
import { currencyProvider } from "./currency-provider";
import { hostProvider } from "./host-provider";
import { eventHallProvider } from "./eventHall-provider";

export const dataProvider = createRaProvider(
  [userProvider, eventProvider, ticketProvider, currencyProvider, hostProvider, eventHallProvider],
import { countryProvider } from "./counrty-provider";
import { tagProvider } from "./tag-provider";
import { newsletterProvider } from "./newsletter-provider";

export const dataProvider = createRaProvider(
  [
    userProvider,
    eventProvider,
    ticketProvider,
    countryProvider,
    tagProvider,
    newsletterProvider,
  ],
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
