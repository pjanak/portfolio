import { Helmet } from 'react-helmet-async'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — AD Architects</title>
      </Helmet>
      <section className="section-pad">
        <div className="container-site max-w-xl">
          <p className="label-upper mb-4">404</p>
          <h1 className="heading-lg mb-4">Page not found.</h1>
          <p className="body-lg mb-8">
            The page you're looking for doesn't exist or may have moved. Try navigating from the
            homepage.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button href="/">Back to home</Button>
            <Button href="/work" variant="outline">View our work</Button>
          </div>
        </div>
      </section>
    </>
  )
}
