import { Admin, CustomRoutes, Resource, defaultTheme } from "react-admin";
import {
  Person as PersonIcon,
  Celebration as CelebrationIcon,
  LocalActivity as LocalActivityIcon,
  MonetizationOn as MonetizationOn,
  Gite as GiteIcon,
  Stadium as StadiumIcon,
  Public as PublicIcon,
  Subscriptions as SubscriptionsIcon,
  Sell as SellIcon,
  ManageAccounts as ManageAccountsIcon,
  Category as CategoryIcon,
  Home as HomeIcon,
  Apartment as ApartmentIcon,
} from "@mui/icons-material";
import { Route } from "react-router-dom";

import { dataProvider } from "./providers";
import { UserList } from "./operations/user/user-list";
import { UserShow } from "./operations/user/user-show";
import { UserEdit } from "./operations/user/user-edit";
import { UserCreate } from "./operations/user/user-create";
import { EventList } from "./operations/event/event-list";
import { EventShow } from "./operations/event/event-show";
import { EventCreate } from "./operations/event/event-create";
import { EventEdit } from "./operations/event/event-edit";
import { authProvider } from "./providers/auth-provider";
import { TicketCreate } from "./operations/ticket/ticket-create";
import { TicketEdit } from "./operations/ticket/ticket-edit";
import { TicketList } from "./operations/ticket/ticket-list";
import { TicketShow } from "./operations/ticket/ticket-show";
import { Layout } from "./layout/layout";
import ProfilePage from "./operations/profil/profil-show";
import ProfileEdit from "./operations/profil/profil-edit";
import { CurrencyList } from "./operations/currency/currency-list";
import { CurrencyShow } from "./operations/currency/currency-show";
import { CurrencyEdit } from "./operations/currency/currency-edit";
import { CurrencyCreate } from "./operations/currency/currency-create";
import { HostList } from "./operations/host/host-list";
import { HostShow } from "./operations/host/host-show";
import { HostEdit } from "./operations/host/host-edit";
import { HostCreate } from "./operations/host/host-create";
import { CountryList } from "./operations/country/county-list";
import { CountryShow } from "./operations/country/country-show";
import { CountryEdit } from "./operations/country/county-edit";
import { CountryCreate } from "./operations/country/country-create";
import { TagCreate } from "./operations/tag/tag-create";
import { TagEdit } from "./operations/tag/tag-edit";
import { TagList } from "./operations/tag/tag-list";
import { TagShow } from "./operations/tag/tag-show";
import { NewsletterCreate } from "./operations/newsletter/newsletter-create";
import { NewsletterEdit } from "./operations/newsletter/newsletter-edit";
import { NewsletterList } from "./operations/newsletter/newsletter-list";
import { NewsletterShow } from "./operations/newsletter/newsletter-show";
import EventTickets from "./operations/event/EventTickets";
import { TicketTypeList } from "./operations/ticketType/ticketType-list";
import { TicketTypeShow } from "./operations/ticketType/ticketType-show";
import { TicketTypeEdit } from "./operations/ticketType/ticketType-edit";
import { TicketTypeCreate } from "./operations/ticketType/ticketType-create";
import { RoleCreate } from "./operations/role/role-create";
import { RoleEdit } from "./operations/role/role-edit";
import { RoleList } from "./operations/role/role-list";
import { RoleShow } from "./operations/role/role-show";
import TicketTypeTickets from "./operations/event/TicketTypeTickets";
import "./assets/css/index.css";
import { HomePage } from "./operations/home/home-page";
import { EventHallCreate } from "./operations/eventHall/eventHall-create";
import { EventHallEdit } from "./operations/eventHall/eventHall-edit";
import { EventHallList } from "./operations/eventHall/eventHall-list";
import { EventHallShow } from "./operations/eventHall/eventHall-show";
import { Login } from "./security/components/login";


export const App = () => {
  return (
    <Admin
      requireAuth
      dashboard={HomePage}
      layout={Layout}
      loginPage={<Login />}
      title="Tapakila Admin"
      dataProvider={dataProvider}
      authProvider={authProvider}
      theme={defaultTheme}
    >
      <Resource
        name="user"
        icon={PersonIcon}
        list={UserList}
        show={UserShow}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource
        name="event"
        icon={CelebrationIcon}
        list={EventList}
        show={EventShow}
        edit={EventEdit}
        create={EventCreate}
      />
      <Resource
        name="ticket"
        icon={LocalActivityIcon}
        list={TicketList}
        show={TicketShow}
        edit={TicketEdit}
        create={TicketCreate}
      />

      <Resource
        name="currency"
        icon={MonetizationOn}
        list={CurrencyList}
        show={CurrencyShow}
        edit={CurrencyEdit}
        create={CurrencyCreate}
      />

      <Resource
        name="host"
        icon={GiteIcon}
        list={HostList}
        show={HostShow}
        edit={HostEdit}
        create={HostCreate}
      />

      <Resource
        name="eventHall"
        icon={StadiumIcon}
        list={HostList}
        show={HostShow}
        edit={HostEdit}
        create={HostCreate}
      />
      <Resource
        name="country"
        icon={PublicIcon}
        list={CountryList}
        show={CountryShow}
        edit={CountryEdit}
        create={CountryCreate}
      />
      <Resource
        name="tag"
        icon={SellIcon}
        list={TagList}
        show={TagShow}
        edit={TagEdit}
        create={TagCreate}
      />
      <Resource
        name="newsletter"
        icon={SubscriptionsIcon}
        list={NewsletterList}
        show={NewsletterShow}
        edit={NewsletterEdit}
        create={NewsletterCreate}
      />
      <Resource
        name="typeTicket"
        icon={CategoryIcon}
        list={TicketTypeList}
        show={TicketTypeShow}
        edit={TicketTypeEdit}
        create={TicketTypeCreate}
      />
      <Resource name="home" icon={HomeIcon} />
      <Resource
        name="role"
        icon={ManageAccountsIcon}
        list={RoleList}
        show={RoleShow}
        edit={RoleEdit}
        create={RoleCreate}
      />
      <Resource
        name="eventHall"
        icon={ApartmentIcon}
        list={EventHallList}
        show={EventHallShow}
        edit={EventHallEdit}
        create={EventHallCreate}
      />
      <CustomRoutes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route
          path="/ticketTypes/eventId/:eventId"
          element={<EventTickets />}
        />
        <Route
          path="/tickets/ticketTypeId/:ticketTypeId"
          element={<TicketTypeTickets />}
        />
      </CustomRoutes>
    </Admin>
  );
};
