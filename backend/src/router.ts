import { router } from './trpc';
import { employeeRouter } from './routers/employee';

export const appRouter = router({
  employee: employeeRouter,
});

export type AppRouter = typeof appRouter;
