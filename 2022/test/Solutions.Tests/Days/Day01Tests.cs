using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using Solutions.Days;
using Xunit;

namespace Solutions.XTests.Days;

public class UnitTest01: IAsyncLifetime
{
    private readonly Day01 _day01 = new();
    private string? _input;

    public async Task InitializeAsync()
    {
        _input = await File.ReadAllTextAsync("./Inputs/Day01.txt");
    }

    public Task DisposeAsync()
    {
        return Task.CompletedTask;
    }

    [Fact]
    public void HandTestPart1()
    {
        const string input = @"1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
";
        var answer = _day01.Part1(input);
        Debug.WriteLine(answer);
    }

    [Fact]
    public void Part1()
    {
        var answer = _day01.Part1(_input!);
        Debug.WriteLine(answer);
        Assert.Equal(0, answer);
    }

    [Fact]
    public void HandTestPart2()
    {
        const string input = @"";
        var answer = _day01.Part2(input);
        Debug.WriteLine(answer);
    }

    [Fact]
    public void Part2()
    {
        var answer = _day01.Part2(_input!);
        Debug.WriteLine(answer);
        Assert.Equal(0, answer);
    }
}
