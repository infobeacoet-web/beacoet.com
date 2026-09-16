/**
 * BEACOET - Master Application Engine v5.0
 * Includes:
 * - Simplified, Human-Friendly Sidebar Navigation (Dashboard, Organizations, Advisor, Tasks, Reports, Content, Design, Reviews, Memory, Settings)
 * - Progressive Navigation Engine (Adapts sidebar options smoothly based on User Journey: New User -> Free User -> Paid Member)
 * - Reusable Notion/Linear Tagging & Search Engine
 * - Zero Em Dash Writing Rule Enforcer
 */

(function () {
    'use strict';

    const DEFAULT_STATE = {
        demoUserState: "state_3_paid",
        user: {
            name: "Pratiksha",
            email: "pratiksha@beacoet.com",
            plan: "pro",
            isLoggedIn: true
        },
        organizations: [
            {
                id: "org-1",
                name: "MotoTrek",
                logo: "🏍️",
                websiteUrl: "https://mototrek.com",
                industry: "Automotive & Travel Gear",
                healthScore: 84,
                latestReportDate: "July 28, 2026",
                status: "Active Strategy v1.0",
                lastActivity: "Instagram Reel Script Generated (2 hours ago)",
                pendingActions: ["Post today's Instagram Reel script", "Review new B2B dealership page copy"],
                vision: "Become the world's most trusted adventure motorcycle gear brand.",
                mission: "Equip adventure riders with indestructible gear for 10,000-mile journeys."
            },
            {
                id: "org-2",
                name: "Acme EcoGear",
                logo: "🌱",
                websiteUrl: "https://acmeecogear.com",
                industry: "Sustainable Goods",
                healthScore: 78,
                latestReportDate: "July 15, 2026",
                status: "Initial Audit Complete",
                lastActivity: "Brand Health Report Generated (2 weeks ago)",
                pendingActions: ["Complete Target Audience Definition"],
                vision: "Make sustainable outdoor gear accessible to every traveler.",
                mission: "Zero-waste outdoor accessories for eco-conscious hikers."
            }
        ]
    };

    function getState() {
        try {
            const saved = localStorage.getItem('beacoet_single_dashboard_state');
            return saved ? JSON.parse(saved) : DEFAULT_STATE;
        } catch (e) {
            return DEFAULT_STATE;
        }
    }

    function saveState(state) {
        try {
            localStorage.setItem('beacoet_single_dashboard_state', JSON.stringify(state));
        } catch (e) {
            console.error("Failed to save BeaCoet state", e);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const state = getState();
        const path = window.location.pathname.split('/').pop() || 'dashboard.html';

        injectGlobalSidebarCSS();
        injectSidebarNavigation(state, path);

        if (path === 'dashboard.html' || path === '') {
            initDemoStateSwitcher(state);
            renderDynamicDashboard(state);
        }

        initInteractiveChips();
    });

    // ----------------------------------------------------
    // MASTER GLOBAL SIDEBAR CSS INJECTION
    // ----------------------------------------------------
    function injectGlobalSidebarCSS() {
        if (document.getElementById('beacoetMasterSidebarStyleBlock')) return;

        const style = document.createElement('style');
        style.id = 'beacoetMasterSidebarStyleBlock';
        style.textContent = `
            :root {
                --beacoet-sidebar-w: 250px;
                --beacoet-gold-color: #D4AF37;
            }
            body {
                background-color: #0A0A0A !important;
                color: #FFFFFF !important;
                font-family: 'Inter', sans-serif !important;
                margin: 0 !important;
                padding: 0 !important;
                overflow-x: hidden !important;
            }
            .dashboard-container {
                display: flex !important;
                min-height: 100vh !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }
            .sidebar {
                width: var(--beacoet-sidebar-w) !important;
                background-color: #111111 !important;
                border-right: 1px solid #262626 !important;
                display: flex !important;
                flex-direction: column !important;
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                bottom: 0 !important;
                z-index: 1000 !important;
                box-sizing: border-box !important;
            }
            .sidebar-header {
                padding: 24px !important;
                border-bottom: 1px solid #262626 !important;
            }
            .sidebar-nav {
                flex: 1 !important;
                padding: 16px 0 !important;
                overflow-y: auto !important;
            }
            .nav-item {
                display: flex !important;
                align-items: center !important;
                padding: 12px 24px !important;
                color: #A0A0A0 !important;
                text-decoration: none !important;
                font-size: 0.95rem !important;
                font-weight: 500 !important;
                transition: all 0.2s ease !important;
                box-sizing: border-box !important;
            }
            .nav-item:hover {
                background-color: #1A1A1A !important;
                color: #D4AF37 !important;
            }
            .nav-item.active {
                background-color: #1A1A1A !important;
                color: #D4AF37 !important;
                border-left: 3px solid #D4AF37 !important;
            }
            .nav-icon {
                width: 22px !important;
                margin-right: 12px !important;
                text-align: center !important;
            }
            .main-content {
                margin-left: var(--beacoet-sidebar-w) !important;
                flex: 1 !important;
                padding: 40px !important;
                max-width: 1100px !important;
                min-height: 100vh !important;
                box-sizing: border-box !important;
            }
            @media (max-width: 768px) {
                .sidebar {
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                }
                .sidebar.mobile-open {
                    transform: translateX(0);
                }
                .main-content {
                    margin-left: 0 !important;
                    padding: 20px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ----------------------------------------------------
    // UNIFIED PROGRESSIVE SIDEBAR NAVIGATION
    // ----------------------------------------------------
    function injectSidebarNavigation(state, currentPath) {
        const container = document.getElementById('globalSidebarContainer');
        if (!container) return;

        const mode = state.demoUserState || 'state_3_paid';
        const isNew = mode === 'state_1_new';
        const isFree = mode === 'state_2_free';

        container.innerHTML = `
            <aside class="sidebar">
                <div class="sidebar-header">
                    <a href="dashboard.html" class="logo">
                        <img src="images/beacoet_name_logo_dark.webp" alt="BeaCoet" style="height:20px;">
                    </a>
                </div>

                <div style="padding:16px 24px; border-bottom:1px solid #262626;">
                    <div style="font-size:0.75rem; color:#888; text-transform:uppercase;">Active Account</div>
                    <div style="font-weight:700; color:#fff; font-size:1rem; margin-top:2px;">MotoTrek</div>
                </div>

                <nav class="sidebar-nav">
                    <!-- 1. Dashboard -->
                    <a href="dashboard.html" class="nav-item ${currentPath === 'dashboard.html' || currentPath === 'dashboard-preview.html' || currentPath === '' ? 'active' : ''}">
                        <i class="fa-solid fa-house nav-icon"></i> Dashboard
                    </a>

                    <!-- 2. Organizations -->
                    <a href="organization-home.html" class="nav-item ${currentPath === 'organization-home.html' ? 'active' : ''}">
                        <i class="fa-solid fa-building nav-icon"></i> Organizations
                    </a>

                    <!-- 3. Advisor -->
                    <a href="advisor-chat.html" class="nav-item ${currentPath === 'advisor-chat.html' || currentPath === 'advisor-history.html' || currentPath === 'ai-workspace.html' ? 'active' : ''}">
                        <i class="fa-solid fa-comments nav-icon"></i> Advisor
                    </a>

                    ${!isNew ? `
                    <!-- 4. Tasks -->
                    <a href="tasks.html" class="nav-item ${currentPath === 'tasks.html' ? 'active' : ''}">
                        <i class="fa-solid fa-list-check nav-icon"></i> Tasks
                    </a>

                    <!-- 5. Reports -->
                    <a href="business-reports.html" class="nav-item ${currentPath === 'business-reports.html' || currentPath === 'recommendations.html' || currentPath === 'business-health.html' ? 'active' : ''}">
                        <i class="fa-solid fa-chart-line nav-icon"></i> Reports
                    </a>
                    ` : ''}

                    ${(!isNew && !isFree) ? `
                    <!-- 6. Content -->
                    <a href="content-studio.html" class="nav-item ${currentPath === 'content-studio.html' ? 'active' : ''}">
                        <i class="fa-solid fa-pen-nib nav-icon"></i> Content
                    </a>

                    <!-- 7. Design -->
                    <a href="design-studio.html" class="nav-item ${currentPath === 'design-studio.html' ? 'active' : ''}">
                        <i class="fa-solid fa-palette nav-icon"></i> Design
                    </a>

                    <!-- 8. Reviews -->
                    <a href="review-studio.html" class="nav-item ${currentPath === 'review-studio.html' ? 'active' : ''}">
                        <i class="fa-solid fa-magnifying-glass nav-icon"></i> Reviews
                    </a>

                    <!-- 9. Memory -->
                    <a href="memory.html" class="nav-item ${currentPath === 'memory.html' || currentPath === 'timeline.html' || currentPath === 'org-memory.html' ? 'active' : ''}">
                        <i class="fa-solid fa-folder nav-icon"></i> Memory
                    </a>
                    ` : ''}

                    <!-- 10. Settings -->
                    <a href="organization-settings.html" class="nav-item ${currentPath === 'organization-settings.html' || currentPath === 'notifications.html' || currentPath === 'settings.html' ? 'active' : ''}">
                        <i class="fa-solid fa-gear nav-icon"></i> Settings
                    </a>
                </nav>

                <div style="padding:20px; border-top:1px solid #262626; display:flex; align-items:center; justify-content:space-between;">
                    <div style="font-size:0.85rem; color:#aaa;">${state.user.email}</div>
                    <button id="sidebarLogoutBtn" style="background:none; border:none; color:#D4AF37; cursor:pointer;" title="Sign Out">
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>
            </aside>
        `;

        document.getElementById('sidebarLogoutBtn')?.addEventListener('click', function () {
            state.user.isLoggedIn = false;
            saveState(state);
            window.location.href = 'index.html';
        });
    }

    // ----------------------------------------------------
    // REUSABLE CHIP TOGGLES & SEARCHABLE MULTI-SELECT ENGINE
    // ----------------------------------------------------
    function initInteractiveChips() {
        document.querySelectorAll('.chip-selectable').forEach(chip => {
            chip.addEventListener('click', function () {
                this.classList.toggle('selected');
            });
        });
    }

    window.BeaCoetSearchSelect = function (config) {
        const container = document.getElementById(config.containerId);
        if (!container) return;

        let selectedItems = new Set(config.defaultSelected || []);

        function render() {
            container.innerHTML = `
                <div style="background:#161616; border:1px solid #262626; border-radius:14px; padding:16px; width:100%; box-sizing:border-box;">
                    <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px;" id="${config.containerId}_selectedChips">
                        ${Array.from(selectedItems).map(item => `
                            <span style="background:#D4AF37; color:#000; font-weight:700; font-size:0.8rem; padding:6px 12px; border-radius:20px; display:inline-flex; align-items:center; gap:6px;">
                                ${item} <i class="fa-solid fa-xmark" style="cursor:pointer;" onclick="BeaCoetSearchSelect.removeItem('${config.containerId}', '${item}')"></i>
                            </span>
                        `).join('')}
                    </div>

                    <div style="position:relative; margin-bottom:12px;">
                        <i class="fa-solid fa-magnifying-glass" style="position:absolute; left:14px; top:14px; color:#888;"></i>
                        <input type="text" id="${config.containerId}_searchInput" placeholder="${config.placeholder || 'Type to search or add custom...'}" style="width:100%; padding:12px 14px 12px 40px; background:#111; border:1px solid #262626; border-radius:10px; color:#FFF; font-family:'Inter',sans-serif; font-size:0.9rem; outline:none; box-sizing:border-box;">
                    </div>

                    <div style="font-size:0.75rem; color:#888; text-transform:uppercase; font-weight:600; margin-bottom:8px;">Popular Suggestions</div>
                    <div style="display:flex; flex-wrap:wrap; gap:8px;" id="${config.containerId}_resultsBox"></div>
                </div>
            `;

            const searchInput = document.getElementById(`${config.containerId}_searchInput`);
            const resultsBox = document.getElementById(`${config.containerId}_resultsBox`);

            function updateResults(query) {
                const q = query.trim().toLowerCase();
                let matches = config.options.filter(opt => opt.toLowerCase().includes(q) && !selectedItems.has(opt));

                let html = matches.map(opt => `
                    <button type="button" onclick="BeaCoetSearchSelect.addItem('${config.containerId}', '${opt}')" style="background:#111; border:1px solid #333; color:#CCC; padding:6px 12px; border-radius:20px; font-size:0.82rem; cursor:pointer; font-family:'Inter',sans-serif; transition:all 0.2s;">
                        + ${opt}
                    </button>
                `).join('');

                if (q && !config.options.map(o => o.toLowerCase()).includes(q) && !selectedItems.has(query.trim())) {
                    html += `
                        <button type="button" onclick="BeaCoetSearchSelect.addItem('${config.containerId}', '${query.trim()}')" style="background:rgba(212,175,55,0.15); border:1px solid #D4AF37; color:#D4AF37; padding:6px 12px; border-radius:20px; font-size:0.82rem; cursor:pointer; font-family:'Inter',sans-serif; font-weight:700;">
                            + Add "${query.trim()}"
                        </button>
                    `;
                }

                resultsBox.innerHTML = html || `<span style="font-size:0.8rem; color:#666;">No additional matches. Type above to add custom item.</span>`;
            }

            updateResults('');

            searchInput.addEventListener('input', function () {
                updateResults(this.value);
            });
        }

        render();

        window.BeaCoetSearchSelect.instances = window.BeaCoetSearchSelect.instances || {};
        window.BeaCoetSearchSelect.instances[config.containerId] = {
            selectedItems,
            render,
            config
        };
    };

    window.BeaCoetSearchSelect.addItem = function (containerId, item) {
        const inst = window.BeaCoetSearchSelect.instances[containerId];
        if (inst) {
            inst.selectedItems.add(item);
            inst.render();
        }
    };

    window.BeaCoetSearchSelect.removeItem = function (containerId, item) {
        const inst = window.BeaCoetSearchSelect.instances[containerId];
        if (inst) {
            inst.selectedItems.delete(item);
            inst.render();
        }
    };

    // ----------------------------------------------------
    // DEVELOPER PREVIEW / DEMO SWITCHER
    // ----------------------------------------------------
    function initDemoStateSwitcher(state) {
        const container = document.getElementById('developerStateSwitcherBar');
        if (!container) return;

        container.innerHTML = `
            <div style="background:#141414; border:1px solid #D4AF37; padding:12px 20px; border-radius:12px; margin-bottom:28px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
                <div style="font-size:0.85rem; color:#D4AF37; font-weight:700; display:flex; align-items:center; gap:8px;">
                    <i class="fa-solid fa-sliders"></i> DEMO STATE SWITCHER:
                </div>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <button class="btn btn-sm" onclick="BeaCoetDemo.setMode('state_1_new')" style="padding:6px 14px; font-size:0.8rem; border-radius:8px; ${state.demoUserState === 'state_1_new' ? 'background:#D4AF37; color:#000; font-weight:700; border:none;' : 'background:#1B1B1B; color:#CCC; border:1px solid #333;'}">State 1: New User</button>
                    <button class="btn btn-sm" onclick="BeaCoetDemo.setMode('state_2_free')" style="padding:6px 14px; font-size:0.8rem; border-radius:8px; ${state.demoUserState === 'state_2_free' ? 'background:#D4AF37; color:#000; font-weight:700; border:none;' : 'background:#1B1B1B; color:#CCC; border:1px solid #333;'}">State 2: Free User</button>
                    <button class="btn btn-sm" onclick="BeaCoetDemo.setMode('state_3_paid')" style="padding:6px 14px; font-size:0.8rem; border-radius:8px; ${state.demoUserState === 'state_3_paid' ? 'background:#D4AF37; color:#000; font-weight:700; border:none;' : 'background:#1B1B1B; color:#CCC; border:1px solid #333;'}">State 3: Active Paid</button>
                    <button class="btn btn-sm" onclick="BeaCoetDemo.setMode('state_4_expired')" style="padding:6px 14px; font-size:0.8rem; border-radius:8px; ${state.demoUserState === 'state_4_expired' ? 'background:#D4AF37; color:#000; font-weight:700; border:none;' : 'background:#1B1B1B; color:#CCC; border:1px solid #333;'}">State 4: Expired Member</button>
                </div>
            </div>
        `;

        window.BeaCoetDemo = {
            setMode: function (mode) {
                state.demoUserState = mode;
                saveState(state);
                renderDynamicDashboard(state);
                initDemoStateSwitcher(state);
                injectSidebarNavigation(state, window.location.pathname.split('/').pop() || 'dashboard.html');
            }
        };
    }

    // ----------------------------------------------------
    // DYNAMIC SINGLE-PAGE DASHBOARD RENDERER
    // ----------------------------------------------------
    function renderDynamicDashboard(state) {
        const mode = state.demoUserState;
        const mainContainer = document.getElementById('dynamicDashboardMainContent');
        if (!mainContainer) return;

        if (mode === 'state_1_new') {
            mainContainer.innerHTML = `
                <div style="background:#111; border:1px solid #262626; border-radius:20px; padding:48px 32px; text-align:center; margin-bottom:32px;">
                    <div style="width:72px; height:72px; background:rgba(212,175,55,0.12); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;">
                        <i class="fa-solid fa-rocket" style="font-size:32px; color:#D4AF37;"></i>
                    </div>
                    <h1 style="font-size:2.2rem; font-weight:800; color:#FFF; margin-bottom:12px;">Welcome to BeaCoet</h1>
                    <p style="color:#AAA; font-size:1rem; max-width:560px; margin:0 auto 28px; line-height:1.6;">
                        BeaCoet understands your business once and becomes your long-term AI Business Partner. Analyze your first business to begin.
                    </p>
                    <a href="index.html" class="btn btn-primary" style="background:#D4AF37; color:#000; font-weight:700; padding:14px 32px; font-size:1.05rem; border-radius:10px; text-decoration:none; display:inline-block;">
                        Analyze Your First Business &rarr;
                    </a>
                </div>
            `;
        } else if (mode === 'state_2_free') {
            mainContainer.innerHTML = `
                <div style="background:#161616; border:1px solid #D4AF37; padding:24px 28px; border-radius:16px; margin-bottom:32px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:rgba(212,175,55,0.15); color:#D4AF37; font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:12px;">FREE REPORT MODE</span>
                        <h2 style="color:#FFF; margin-top:8px; margin-bottom:4px; font-size:1.5rem;">Free Business Health Report Available</h2>
                        <p style="color:#AAA; font-size:0.95rem; margin:0;">Unlock detailed SWOT, Action Plan, AI Co-Founder, and Content Studios.</p>
                    </div>
                    <a href="payment.html" class="btn btn-primary" style="background:#D4AF37; color:#000; font-weight:700; padding:12px 24px; border-radius:10px; text-decoration:none;">
                        Unlock Full Business Intelligence &rarr;
                    </a>
                </div>

                <h2 style="font-size:1.4rem; font-weight:700; color:#FFF; margin-bottom:20px;">My Businesses (2)</h2>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:32px;">
                    ${renderOrganizationCards(state.organizations, false)}
                </div>
            `;
        } else if (mode === 'state_4_expired') {
            mainContainer.innerHTML = `
                <div style="background:#2A1B00; border:1px solid #D4AF37; padding:20px 24px; border-radius:16px; margin-bottom:32px; display:flex; align-items:center; justify-content:space-between;">
                    <div>
                        <div style="font-weight:700; color:#D4AF37; font-size:1.05rem;"><i class="fa-solid fa-circle-info"></i> Membership Expired: Operating in Read-Only Mode</div>
                        <p style="color:#DDD; font-size:0.9rem; margin-top:4px; margin-bottom:0;">All your existing reports, business memory, and previously generated content remain 100% accessible.</p>
                    </div>
                    <a href="payment.html" class="btn btn-primary" style="background:#D4AF37; color:#000; font-weight:700; padding:12px 20px; border-radius:8px; text-decoration:none; white-space:nowrap;">Renew Subscription &rarr;</a>
                </div>

                <h2 style="font-size:1.4rem; font-weight:700; color:#FFF; margin-bottom:20px;">My Businesses (Read-Only Mode)</h2>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:32px;">
                    ${renderOrganizationCards(state.organizations, true)}
                </div>
            `;
        } else {
            mainContainer.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
                    <div>
                        <h1 style="font-size:1.8rem; font-weight:700; margin:0; color:#FFF;">Business Command Center</h1>
                        <p style="color:#888; margin-top:6px; font-size:0.95rem;">Managing 2 Active Businesses under AI Business Operating System.</p>
                    </div>
                    <a href="advisor-chat.html" class="btn btn-primary" style="background:#D4AF37; color:#000; font-weight:700; padding:12px 20px; border-radius:10px; text-decoration:none;">Ask AI Partner &rarr;</a>
                </div>

                <h2 style="font-size:1.3rem; font-weight:700; color:#FFF; margin-bottom:20px;"><i class="fa-solid fa-building" style="color:#D4AF37; margin-right:8px;"></i> My Businesses (2)</h2>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:32px;">
                    ${renderOrganizationCards(state.organizations, false)}
                </div>
            `;
        }
    }

    function renderOrganizationCards(orgs, isReadOnly) {
        return orgs.map(org => `
            <div class="card" style="background:#111; border:1px solid #262626; border-radius:18px; padding:24px; display:flex; flex-direction:column; justify-space-between;">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div style="width:44px; height:44px; background:#161616; border:1px solid #333; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.4rem;">${org.logo}</div>
                        <div>
                            <h3 style="color:#FFF; margin:0; font-size:1.15rem;">${org.name}</h3>
                            <a href="${org.websiteUrl}" target="_blank" style="color:#888; font-size:0.8rem; text-decoration:none;">${org.websiteUrl}</a>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:0.75rem; color:#888; text-transform:uppercase;">Health Score</div>
                        <div style="font-size:1.8rem; font-weight:800; color:#D4AF37;">${org.healthScore}</div>
                    </div>
                </div>

                <div style="background:#161616; padding:12px 14px; border-radius:10px; margin-bottom:16px; font-size:0.85rem; color:#CCC;">
                    <div style="color:#888; font-size:0.75rem;">LAST ACTIVITY</div>
                    <div style="font-weight:600; margin-top:2px;">${org.lastActivity}</div>
                </div>

                <div style="display:flex; gap:8px; margin-top:auto;">
                    <a href="business-reports.html" class="btn btn-outline" style="border:1px solid #333; color:#DDD; padding:8px 14px; font-size:0.85rem; border-radius:8px; text-decoration:none; flex:1; text-align:center;">View Report</a>
                    ${!isReadOnly ? `<a href="advisor-chat.html" class="btn btn-primary" style="background:#D4AF37; color:#000; font-weight:700; padding:8px 14px; font-size:0.85rem; border-radius:8px; text-decoration:none; flex:1; text-align:center;">Ask AI &rarr;</a>` : `<span style="font-size:0.75rem; color:#888; padding:8px 14px; align-self:center;">Read-Only</span>`}
                </div>
            </div>
        `).join('');
    }

    window.BeaCoetSingleDashboard = { getState, saveState };
})();
