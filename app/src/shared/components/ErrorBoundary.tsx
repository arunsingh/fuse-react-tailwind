import { Component, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() { return { hasError: true } }

  override render() {
    if (this.state.hasError) {
      return <div role="alert" className="p-6">Something went wrong.</div>
    }
    return this.props.children
  }
}


