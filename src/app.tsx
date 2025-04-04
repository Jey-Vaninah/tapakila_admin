import { Admin, CustomRoutes, Resource, defaultTheme } from "react-admin";
import {
  Person as PersonIcon,
  Celebration as CelebrationIcon,
  LocalActivity as LocalActivityIcon,
  MonetizationOn as MonetizationOn,
  Gite as GiteIcon,
  Public as PublicIcon,
  Sell as SellIcon,
  ManageAccounts as ManageAccountsIcon,
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
import { LoginPage } from "./security/components/login-page";
import ProfilePage from "./operations/profil/profil-show";
import ProfileEdit from "./operations/profil/profil-edit";
import { CurrencyList } from "./operations/currency/currency-list";
import { CurrencyShow } from "./operations/currency/currency-show";
import { HostList } from "./operations/host/host-list";
import { HostShow } from "./operations/host/host-show";
import { CountryList } from "./operations/country/country-list";
import { CountryShow } from "./operations/country/country-show";
import { TagList } from "./operations/tag/tag-list";
import { TagShow } from "./operations/tag/tag-show";
import { TicketTypeList } from "./operations/ticketType/ticketType-list";
import { TicketTypeShow } from "./operations/ticketType/ticketType-show";
import { TicketTypeEdit } from "./operations/ticketType/ticketType-edit";
import { TicketTypeCreate } from "./operations/ticketType/ticketType-create";
import { RoleList } from "./operations/role/role-list";
import { RoleShow } from "./operations/role/role-show";
import "./assets/css/index.css";
import { HomePage } from "./operations/home/home-page";
import { EventHallList } from "./operations/eventHall/eventHall-list";
import { EventHallShow } from "./operations/eventHall/eventHall-show";

export const App = () => {
  return (
    <Admin
      requireAuth
      dashboard={HomePage}
      layout={Layout}
      loginPage={<LoginPage />}
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
      />

      <Resource
        name="host"
        icon={GiteIcon}
        list={HostList}
        show={HostShow}
      />

      <Resource
        name="country"
        icon={PublicIcon}
        list={CountryList}
        show={CountryShow}

      />
      <Resource name="tag" icon={SellIcon} list={TagList} show={TagShow} />
      <Resource
        name="typeTicket"
		icon={LocalActivityIcon}
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
      />
      <Resource
        name="venue"
        icon={ApartmentIcon}
        list={EventHallList}
        show={EventHallShow}
      />
      <CustomRoutes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </CustomRoutes>
    </Admin>
  );
};
