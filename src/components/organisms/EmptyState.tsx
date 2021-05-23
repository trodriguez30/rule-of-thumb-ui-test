import React from "react";

interface EmptyStateProps {
  message: string;
  image: string;
}

function EmptyState(props: EmptyStateProps) {
  return <div></div>;
}

export default EmptyState;
