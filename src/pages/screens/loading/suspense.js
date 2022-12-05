import { Suspense } from 'react'
import LoadingScreen from '.'

export default function SuspensesSreen({ childern }) {
  return <Suspense fallback={<LoadingScreen />}>{childern}</Suspense>
}
