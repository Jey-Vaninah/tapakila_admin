import { Admin, CustomRoutes, Resource, defaultTheme } from "react-admin";
import {
  Person as PersonIcon,
  Celebration as CelebrationIcon,
  LocalActivity as LocalActivityIcon,
  MonetizationOn as MonetizationOn
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
import { CurrencyEdit } from "./operations/currency/currency-edit";
import { CurrencyCreate } from "./operations/currency/currency-create";

export const App = () => {
  return (
    <Admin
      requireAuth
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
        edit={CurrencyEdit}
        create={CurrencyCreate}
      />

      <CustomRoutes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </CustomRoutes>
    </Admin>
  );
};
