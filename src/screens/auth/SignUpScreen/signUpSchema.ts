import {z} from 'zod'
import {stringUtils} from '@utils';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

export const signUpSchema = z.object({
    username: z
    .string()
    .min(5, 'username muito curto')
    .regex(userNameRegex, 'username inválido')
    .toLowerCase(),
    firstName: z
        .string()
        .min(3,'Nome muito curto')
        .max(50, 'Nome muito longo')
        .transform(stringUtils.capitalizeFirstLetter),
    lastName: z
        .string()
        .min(5, 'nome muito curto')
        .max(50, 'nome muito longo')
        .transform(stringUtils.capitalizeFirstLetter),
        email: z.string().email('Email inválido'),
        password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;