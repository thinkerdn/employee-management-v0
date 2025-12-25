import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { prisma } from '../db';

const createEmployeeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  department: z.string().min(1),
  position: z.string().min(1),
  salary: z.number().positive(),
});

const updateEmployeeSchema = z.object({
  id: z.number(),
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  department: z.string().min(1).optional(),
  position: z.string().min(1).optional(),
  salary: z.number().positive().optional(),
  isActive: z.boolean().optional(),
});

export const employeeRouter = router({
  // Get all employees
  getAll: publicProcedure.query(async () => {
    return await prisma.employee.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }),

  // Get employee by ID
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await prisma.employee.findUnique({
        where: { id: input.id },
      });
    }),

  // Create new employee
  create: publicProcedure
    .input(createEmployeeSchema)
    .mutation(async ({ input }) => {
      return await prisma.employee.create({
        data: input,
      });
    }),

  // Update employee
  update: publicProcedure
    .input(updateEmployeeSchema)
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      return await prisma.employee.update({
        where: { id },
        data,
      });
    }),

  // Delete employee
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      return await prisma.employee.delete({
        where: { id: input.id },
      });
    }),

  // Search employees
  search: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      return await prisma.employee.findMany({
        where: {
          OR: [
            { firstName: { contains: input.query } },
            { lastName: { contains: input.query } },
            { email: { contains: input.query } },
            { department: { contains: input.query } },
            { position: { contains: input.query } },
          ],
        },
        orderBy: { createdAt: 'desc' },
      });
    }),
});
