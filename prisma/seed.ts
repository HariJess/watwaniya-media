import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    throw new Error('ADMIN_EMAIL et ADMIN_PASSWORD doivent être définis dans .env.local')
  }

  const hash = await bcrypt.hash(password, 12)

  const admin = await prisma.admin.upsert({
    where: { email },
    update: { password: hash },
    create: { email, password: hash, name: 'Admin' },
  })

  console.log(`✓ Admin seed OK: ${admin.email} (id=${admin.id})`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
