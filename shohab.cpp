#include <iostream>

using namespace std;

void noDup(int *num, int n)
{

    int arr[n];
    int count = 0;

    for (int i = 0; i < n; i++)
    {

        bool dup = false;

        for (int j = 0; j < count; j++)
        {

            if (arr[j] == num[i])
            {
                dup = true;
                break;
            }
        }

        if (!dup)
        {
            arr[count] = num[i];
            count++;
        }
    }

    for (int i = 0; i < count; i++)
    {
        cout << arr[i] << " ";
    }
}

int main()
{
    int n;
    cout << "Enter element number: ";
    cin >> n;

    int num[n];
    cout << "Enter your Element : ";
    for (int i = 0; i < n; i++)
    {
        cin >> num[i];
    }

    noDup(num, n);
}