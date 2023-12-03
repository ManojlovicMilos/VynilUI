import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilityService {
    
    public createId() : string {
        return this.generateFromSequence('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
    }

    public createShortId() : string {
        return this.generateFromSequence('xxxxxxxx');
    }

    public camelCaseToCapitalCase(entry: string): string {
        const result = entry.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    public clearSubscriptions(subscriptions: Subscription[]): Subscription[] {
        subscriptions.forEach((subscription: Subscription) => {
            if (!subscription.closed) {
                subscription.unsubscribe();
            }
        });
        return [];
    }

    public findById<T>(id: string, array: { id: string }[]): { id: string } | undefined {
        const items = array.filter((entry: { id: string }) => entry.id === id);
        return items && items.length > 0 ? items[0] : undefined;
    }

    public compare<T>(value1: T, value2: T): boolean {
        if (typeof(value1) !== typeof(value2)) return false;
        if (Array.isArray(value1)) {
            return this.compareArrays(value1 as unknown[], value2 as unknown[]);
        } else if (typeof(value1) === 'object') {
            return this.compareObjects(value1 as object, value2 as object);
        } else {
            return value1 === value2;
        }
    }

    private compareObjects<T extends object>(object1: T, object2: T): boolean {
        let equal = true;
        const a = object1 as { [key: string]: unknown };
        const b = object2 as { [key: string]: unknown };
        const keys = Object.keys(object1);
        for(const key of keys) {
            if (typeof(a[key]) !== typeof(b[key])) {
                equal = false;
                break;
            }
            equal &&= this.compare(a[key], b[key]);
        }
        return equal;
    }

    private compareArrays<T>(array1: T[], array2: T[]): boolean {
        if (array1.length !== array2.length) return false;
        for (const i in array1) {
            if (array1[i] !== array2[i]) return false;
        }
        return true;
    }

    private generateFromSequence(sequence: string) : string {
        let dt: number = new Date().getTime();
        const generated: string = sequence.replace(/[xy]/g, (c) =>
        {
            const r: number = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return generated;
    }
}
