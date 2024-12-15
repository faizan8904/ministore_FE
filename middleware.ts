import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/','/explore','/category/(.*)','/project-detail/(.*)','/sign-in(.*)', '/sign-up(.*)','/about','/contact','/privacypolicy','/disclaimer','/termscondition']);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};