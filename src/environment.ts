// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

interface Environment {
  port: number | string;
  mongoDb: string;
  secret: string;
  jwt_secret: string;
  password: string;
  admin_name: string;
  admin_email: string;
  admin_password: string;
  admin_phone: string;
  salt_work_factor: number;
}

export const environment: Environment = {
  port: process.env.PORT || 8081,
  mongoDb: process.env.MONGO_CONNECTION_STRING as string,
  secret: process.env.SECRET as string,
  jwt_secret: process.env.JWT_SECRET as string,
  password: process.env.PASSWORD as string,
  admin_name: process.env.ADMIN_NAME as string,
  admin_email: process.env.ADMIN_EMAIL as string,
  admin_password: process.env.ADMIN_PASSWORD as string,
  admin_phone: process.env.ADMIN_PHONE as string,
  salt_work_factor: process.env.SALT_WORK_FACTOR as unknown as number,
};
