const routes = {
  index: "/",
  auth: {
    index: "/auth/",
    login: "/auth/login",
    service: {
      select: (isNew: boolean) => `/auth/service/select?isNew=${isNew}`,
      connect: (name: string, isNew: boolean) =>
        `/auth/service/${name}/connect?isNew=${isNew}`,
      complete: (name: string, isNew: boolean) =>
        `/auth/service/${name}/complete?isNew=${isNew}`
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
