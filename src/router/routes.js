const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      { path: "register", component: () => import("pages/RegisterPage.vue") },
      { path: "reset-password-request", component: () => import("pages/ResetPasswordRequestPage.vue") },
      { path: "reset-password/:token", component: () => import("pages/ResetPasswordPage.vue") },
      { path: "contact-us", component: () => import("pages/ContactUsPage.vue") },
      { path: "activities", component: () => import("pages/ActivitiesPage.vue") },
      { path: "category", component: () => import("pages/CategoryPage.vue") },
      { path: "privacy", component: () => import("pages/PrivacyPage.vue") },
      { path: "terms", component: () => import("pages/TermsPage.vue") },
      { path: "activity/:id", component: () => import("pages/BlogPage.vue") },
      { path: "habitat-details/:id", component: () => import("pages/HabitatPage.vue") },
      {
        path: "habitat-reservation/:id",
        name: "habitatReservation",
        component: () => import("pages/HabitatReservationPage.vue")
      }
    ]
  },
  {
    path: "/admin/",
    component: () => import("layouts/AdminMainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/admin/IndexPage.vue") },
      { path: "profile", component: () => import("pages/admin/ProfilePage.vue") },
      { path: "habitat", component: () => import("pages/admin/habitat/HabitatIndexPage.vue") },
      { path: "reservation", component: () => import("pages/admin/reservation/ReservationIndexPage.vue") },
      { path: "reservation/new", component: () => import("pages/admin/reservation/ReservationNewPage.vue") },
      { path: "category", component: () => import("pages/admin/category/CategoryIndexPage.vue") },
      { path: "blog", component: () => import("pages/admin/blog/BlogIndexPage.vue") },
      { path: "blog/new", component: () => import("pages/admin/blog/BlogNewPage.vue") },
      { path: "favorite", component: () => import("pages/admin/client/FavoriteHabitatPage.vue") },
      { path: "equipment", component: () => import("pages/admin/equipment/EquipmentPage.vue") },
      { path: "properties", component: () => import("pages/admin/property/PropertiesPage.vue") },
      { path: "users", component: () => import("pages/admin/user/UsersPage.vue") },
      { path: "planning", component: () => import("pages/admin/planning/PlanningAdminPage.vue") },
      { path: "notification", component: () => import("pages/admin/notification/NotificationIndexPage.vue") },
      { path: "blog/:id/edit", component: () => import("pages/admin/blog/BlogEditPage.vue") },
      {
        path: "client/", children: [
          { path: "reservation", component: () => import("pages/admin/client/ReservationClientPage.vue") },
          { path: "habitat", component: () => import("pages/admin/client/HabitatClientPage.vue") },
          { path: "habitat/new", component: () => import("pages/admin/client/HabitatClientFormPage.vue") },
          { path: "planning", component: () => import("pages/admin/client/PlanningPage.vue") }
        ]
      },
      {
        path: "settings/", component: () => import("pages/admin/settings/SettingsPage.vue"), children: [
          { path: "profils", component: () => import("pages/admin/settings/UpdateProfilsForm.vue") },
          { path: "become-host", component: () => import("pages/admin/settings/UpdateHostProfils.vue") },
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
