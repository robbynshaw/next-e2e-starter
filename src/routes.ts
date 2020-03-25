const routes = {
  index: "/",
  auth: {
    index: "/auth/",
    login: "/auth/login",
    connect: {
      select: (isNew: boolean) =>
        `/auth/connect/select/${isNew ? "new" : "import"}`,
      service: (name: string) => `/auth/connect/service/${name}`
    },
    seed: {
      confirm: "/auth/seed/confirm",
      import: "/auth/seed/import",
      prep: "/auth/seed/prep",
      generate: "/auth/seed/generate",
      overview: "/auth/seed/overview"
    }
  }
};

export default routes;
