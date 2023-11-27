document.addEventListener('DOMContentLoaded', () => {

  const selectors = {
    openSelector: 'is-open',
    bodyBlocked: 'is-blocked',
    // modal: 'modal',
    // modalTrigger: '[data-action="modalTrigger"]',
    interactiveElements: 'input, button, a, textarea, iframe, select',
    mobileMenu: 'js-mobile-menu',
    mobileMenuTrigger: '[data-action="mobileMenuTrigger"]',
  }

  const initMobileMenu = () => {
    const mobileMenu = document.querySelector(`.${selectors.mobileMenu}`);
    const triggerArr = [...document.querySelectorAll(selectors.mobileMenuTrigger)];
    const body = document.querySelector('body');

    if (!mobileMenu || !triggerArr.length) {
      return;
    }

    triggerArr.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        mobileMenu.classList.toggle(selectors.openSelector);
        body.classList.toggle(selectors.bodyBlocked);

        initModals(selectors.openSelector, selectors.mobileMenu);
      })
    })
  }

  const initModalTriggers = () => {
    const buttonsArr = [...document.querySelectorAll(selectors.modalTrigger)];

    if (!buttonsArr.length) {
      return;
    }

    buttonsArr.forEach((button, index) => {
      button.addEventListener('click', () => {
        modalHandler(button, index, selectors.openSelector);
        initModals(selectors.openSelector, selectors.modal);
      })
    })
  }

  const modalHandler = (trigger, index, modalActiveSelector) => {
    const modals = [...document.querySelectorAll(`.${selectors.modal}`)];

    if (!modals.length) {
      return;
    }

    const body = document.querySelector('body');

    body.classList.toggle(selectors.bodyBlocked);

    modals.forEach((modal, i) => {
      modal.classList.remove(modalActiveSelector);

      if (i == index && !trigger.closest(`.${modalActiveSelector}`)) {
        modal.classList.add(modalActiveSelector);
      }
    })
  }

  const initModals = (modalActiveSelector, modalSelector) => {
    const modals = [...document.querySelectorAll(`.${modalSelector}`)];

    if (!modals.length) {
      return;
    }

    modals.forEach((modal) => {
      const interactiveElements = [...modal.querySelectorAll(selectors.interactiveElements)];
      const allInteractiveElements = [...document.querySelectorAll(selectors.interactiveElements)];
      let pageInteractiveElements = [];

      allInteractiveElements.forEach((el) => {
        if (!el.closest(`.${modalSelector}`)) {
          pageInteractiveElements.push(el);
        }
      })

      tabindexHandler(interactiveElements, modalActiveSelector, pageInteractiveElements)
    })
  }

  const tabindexHandler = (elements, modalActiveSelector, pageInteractiveElements) => {
    elements.forEach((element) => {
      if (!element.closest(`.${modalActiveSelector}`)) {
        element.setAttribute('tabindex', '-1');

        pageInteractiveElements.forEach((element) => {
          element.setAttribute('tabindex', '0');
        })
      } else {
        element.setAttribute('tabindex', '0');

        pageInteractiveElements.forEach((element) => {
          element.setAttribute('tabindex', '-1');
        })
      }
    })
  }

// ==================== smooth scroll start =========================== //

  const scrollToTarget = (target) => {
    const targetElement = document.getElementById(target);

    if (!targetElement) return;

    window.scrollTo({
      left: 0,
      behavior: 'smooth',
      top: targetElement.offsetTop,
    });
  };

  const initScrollAnchors = () => {
    const links = [...document.querySelectorAll('[href*="#"]')];

    if (!links.length) return;

    links.forEach((link) => {
      const target = link.getAttribute('href').split('#', [2]).slice(1);

      if (!target.length) {
        return;
      }

      link.addEventListener('click', (event) => {
        event.preventDefault();
        scrollToTarget(target);
      });
    });
  };

  // ==================== smooth scroll end =========================== //


  initScrollAnchors();
  initMobileMenu();
  initModalTriggers();
});