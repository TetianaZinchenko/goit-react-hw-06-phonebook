import React from 'react';
import { toast } from 'react-toastify';

export default function Notification() {
  return <>{toast.error('There are no contacts yet!')}</>;
}
