import { Admin, Resource } from "react-admin"

import { DummyList } from "./operations/dummy"
import { dataProvider } from "./providers"

export const App = () => {
  return (
    <Admin
      title="Tapakila Admin"
      dataProvider={dataProvider}
    >
      <Resource name="dummy" list={<DummyList />} />
    </Admin>
  )
}
