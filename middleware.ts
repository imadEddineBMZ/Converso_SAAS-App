import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Définir les routes publiques (accessibles sans connexion)
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',  // Toutes les routes sign-in
  '/sign-up(.*)',  // Si vous avez sign-up aussi
  '/',             // Page d'accueil publique si nécessaire
])

export default clerkMiddleware(async (auth, req) => {
  // Protéger toutes les routes SAUF celles définies comme publiques
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}