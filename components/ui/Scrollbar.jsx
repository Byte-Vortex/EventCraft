import React, { ReactNode } from 'react'

export default function CustomScrollbar({ children, className = '', style = {} }) {
  return (
    <div
      className={`custom-scrollbar ${className}`}
      style={{
        '--scrollbar-foreground': 'hsl(var(--primary))',
        '--scrollbar-background': 'hsl(var(--secondary))',
        '--scrollbar-size': '10px',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// CSS for the custom scrollbar
const styles = `
  .custom-scrollbar {
    scrollbar-width: var(--scrollbar-size);
    scrollbar-color: var(--scrollbar-foreground) var(--scrollbar-background);
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: var(--scrollbar-size);
    height: var(--scrollbar-size);
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: var(--scrollbar-background);
    border-radius: var(--scrollbar-size);
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-foreground);
    border-radius: var(--scrollbar-size);
    border: 2px solid var(--scrollbar-background);
  }

  .custom-scrollbar::-webkit-scrollbar-corner {
    background: var(--scrollbar-background);
  }
`

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = styles
  document.head.appendChild(styleElement)
}

// Example usage
export function ExampleComponent() {
  return (
    <CustomScrollbar className="h-64 w-full overflow-y-auto p-4 bg-secondary text-secondary-foreground">
      <h2 className="text-2xl font-bold mb-4">Custom Scrollbar Example</h2>
      <p className="mb-4">This is an example of content with a custom scrollbar.</p>
      {Array.from({ length: 20 }).map((_, index) => (
        <p key={index} className="mb-4">
          Scroll me! This is paragraph {index + 1}.
        </p>
      ))}
    </CustomScrollbar>
  )
}