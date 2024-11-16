import React from "react";

import { AppRouter } from "components/AppRouter/AppRouter";
import { PageLayout } from "components/PageLayout/PageLayout";

import { AppProviders } from "providers/AppProviders/AppProviders";

export const App = () => {
  return (
    <React.Suspense fallback={""}>
      <AppProviders>
        <PageLayout>
          <AppRouter />
        </PageLayout>
      </AppProviders>
    </React.Suspense>
  );
};
