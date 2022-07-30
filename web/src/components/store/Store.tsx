import type { Attributes } from 'preact'
import { h } from 'preact'

type StoreProps = Attributes & { kind: 'plugins' | 'themes' }

export default function Store ({ kind }: StoreProps) {
  return <div>owo? {kind}</div>
}