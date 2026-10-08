import React, { Component } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <section
          style={{
            maxWidth: '680px',
            margin: '60px auto',
            padding: '40px 32px',
            textAlign: 'center',
            borderRadius: '24px',
            border: '1px solid rgba(212, 163, 115, 0.4)',
            background: 'rgba(14, 22, 15, 0.95)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(212, 163, 115, 0.15)',
              color: 'var(--accent-gold, #d4a373)',
              marginBottom: '20px'
            }}
          >
            <AlertTriangle size={28} />
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.8rem',
              color: 'var(--text-serif-cream, #f9f1d7)',
              margin: '0 0 12px'
            }}
          >
            Terminal Interface Interrupted
          </h2>

          <p
            style={{
              color: 'var(--text-sans-slate, #8fa19a)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              marginBottom: '28px'
            }}
          >
            An unexpected runtime exception occurred while rendering this view. You can attempt to refresh the terminal view or return to the main dashboard.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}
          >
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-hud"
              style={{ cursor: 'pointer' }}
            >
              <RefreshCw size={15} />
              <span>Reload State</span>
            </button>

            <button
              type="button"
              onClick={this.handleReset}
              className="btn-hud btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              <Home size={15} />
              <span>Return Home</span>
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
