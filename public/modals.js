/**
 * BeaCoet Global Modal System
 * Handles initialization, opening, closing, and state management for all modals.
 */

class BeaCoetModal {
    constructor() {
        this.activeModal = null;
        this.init();
    }

    init() {
        // Create backdrop if it doesn't exist
        if (!document.getElementById('beacoet-modal-backdrop')) {
            const backdrop = document.createElement('div');
            backdrop.id = 'beacoet-modal-backdrop';
            backdrop.className = 'beacoet-modal-backdrop';
            document.body.appendChild(backdrop);

            // Close on backdrop click
            backdrop.addEventListener('click', (e) => {
                if (e.target === backdrop) {
                    this.close();
                }
            });
        }

        // Bind escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.close();
            }
        });

        // Bind trigger buttons
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest('[data-modal-target]');
            if (trigger) {
                e.preventDefault();
                const targetId = trigger.getAttribute('data-modal-target');
                this.open(targetId);
            }

            const closeBtn = e.target.closest('[data-modal-close]');
            if (closeBtn) {
                e.preventDefault();
                this.close();
            }
        });
    }

    open(modalId) {
        const modal = document.getElementById(modalId);
        const backdrop = document.getElementById('beacoet-modal-backdrop');

        if (!modal || !backdrop) return;

        // If another modal is open, hide it first
        if (this.activeModal && this.activeModal !== modal) {
            this.activeModal.style.display = 'none';
        }

        // Move modal inside backdrop if it isn't already
        if (modal.parentNode !== backdrop) {
            backdrop.appendChild(modal);
        }

        // Show modal
        modal.style.display = 'flex';
        
        // Trigger reflow
        void modal.offsetWidth;

        // Add active classes
        backdrop.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        this.activeModal = modal;

        // Focus first input if exists
        const firstInput = modal.querySelector('input, select, textarea');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }

    close() {
        const backdrop = document.getElementById('beacoet-modal-backdrop');
        
        if (!backdrop || !this.activeModal) return;

        backdrop.classList.remove('is-open');
        document.body.style.overflow = '';

        // Wait for animation to finish before hiding
        setTimeout(() => {
            if (this.activeModal) {
                this.activeModal.style.display = 'none';
                
                // Reset any forms inside the modal
                const form = this.activeModal.querySelector('form');
                if (form) form.reset();
                
                // Remove loading states from buttons
                const loadingBtns = this.activeModal.querySelectorAll('.is-loading');
                loadingBtns.forEach(btn => btn.classList.remove('is-loading'));

                this.activeModal = null;
            }
        }, 300); // Matches CSS transition time
    }

    // Helper method to simulate API calls
    simulateAction(btnElement, successCallback, duration = 1500) {
        if (!btnElement) return;
        
        btnElement.classList.add('is-loading');
        
        setTimeout(() => {
            btnElement.classList.remove('is-loading');
            if (typeof successCallback === 'function') {
                successCallback();
            }
        }, duration);
    }

    // Helper for shake animation on validation error
    shake(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('modal-shake');
            void modal.offsetWidth; // trigger reflow
            modal.classList.add('modal-shake');
        }
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.BeaCoetModals = new BeaCoetModal();
});
