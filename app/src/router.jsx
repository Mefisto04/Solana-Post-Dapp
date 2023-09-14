import { FC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Dashboard } from "src/pages/dashboard"


export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
