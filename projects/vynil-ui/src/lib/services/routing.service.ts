import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Params, Router, ActivatedRoute } from '@angular/router';

export type ParamsData = { [key: string]: string };

@Injectable({
    providedIn: 'root',
})
export class RoutingService {
    public queryParams: BehaviorSubject<ParamsData>;

    constructor(
        private router: Router,
        private location: Location,
        private activatedRoute: ActivatedRoute,
    ) {
        this.queryParams = new BehaviorSubject<ParamsData>({});
        this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
            this.queryParams.next(queryParams);
        });
    }

    public navigate(route: string, queryParams?: ParamsData) {
        this.navigateWithQueryParams(route, queryParams || {});
    }

    public navigateInNewTab(route: string) {
        const url = this.router.serializeUrl(
            this.router.createUrlTree([route])
        );
        window.open(url, '_blank');
    }

    public navigateWithQueryParams(
        route: string | string[],
        queryParams: ParamsData,
        merge?: boolean,
    ) {
        const routeInfo = typeof route === 'string' ? [route] : route;
        this.router.navigate(routeInfo, {
            queryParams: {
                ...queryParams,
            },
            queryParamsHandling: merge ? 'merge' : '',
        });
    }

    public navigateBack() {
        this.location.back();
    }
}
