import { Admin, CustomRoutes, Resource, defaultTheme } from "react-admin";
import {
  Person as PersonIcon,
  Celebration as CelebrationIcon,
  LocalActivity as LocalActivityIcon,
  Public as PublicIcon,
  CameraIndoor as CameraIndoorIcon,
  Subscriptions as SubscriptionsIcon,
  Sell as SellIcon
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

export const App = () => {
  return (
    <Admin
      requireAuth
      layout={Layout}
      loginPage={<LoginPage />}
      title="Tapakila Admin"
      dataProvider={dataProvider}
      authProvider={authProvider}
      theme={defaultTheme} // Ajoutez cette ligne pour définir le thème par défaut en mode clair
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
      <CustomRoutes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </CustomRoutes>
    </Admin>
  );
};
